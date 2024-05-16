import semver from 'semver';
import { execSync } from 'child_process';
import fs from 'fs';

const args = process.argv.slice(2);

if (args.length === 0) {
    console.error('This is meant to be used only by the pipeline in the CI.');
    console.error('available commands: validate, setpreversion');
    process.exit(1);
}

const packageJsonRaw = fs.readFileSync('./package.json');

const tkNpmFeedVersionsQuery = execSync('npm view @statisticsfinland/pxvisualizer --json');
const tkNpmFeedVersions = JSON.parse(tkNpmFeedVersionsQuery);

const localVersion = JSON.parse(packageJsonRaw).version.trim();
const latest = tkNpmFeedVersions['dist-tags']?.latest;
const env = process.env.ENV;

if (semver.valid(semver.coerce(localVersion)) !== localVersion) {
    console.error(`package.json version should always be in format x.x.x, provided version was: ${localVersion}`);
    console.error('prerelease versions are done only inside the pipeline');
    process.exit(1);
}

const allowed_envs = ['d', 't'];

switch (args[0]) {
    case 'validate':
        versionValidation();
        break;
    case 'setpreversion':
        if (allowed_envs.includes(env)) {
            const preversion = tkNpmFeedVersions['dist-tags'][env];
            setPreVersion(preversion);
        } else {
            console.error(`setpreversion is allowed only for envs ${allowed_envs.join(',')} provided env was: ${env}`);
            process.exit(1);
        }
        break;
}

// localVersion must be bigger than @latest
function versionValidation() {
    if (!semver.valid(localVersion)) {
        console.error(`Invalid version, current version is not valid semver version: ${localVersion}`);
        process.exit(1);
    }

    if (!semver.gt(localVersion, latest)) {
        console.error('Development version must be greater than published one.');
        console.error(`local version: ${localVersion}, feed version: ${latest}`);
        process.exit(1);
    }
}

function setPreVersion(current_preversion) {
    // if localVersion's full version matches @d or @t, set that preversion as current and bump preversion
    if (current_preversion && semver.coerce(current_preversion).version === localVersion) {
        execSync(`npm version ${current_preversion} --git-tag-version=false`);
        execSync(`npm version prerelease --preid=${env} --git-tag-version=false`);
    } else { // if localVersion has no matching preversion @d or @t then just bump/set preversion
        execSync(`npm version ${localVersion}-${env}.0 --git-tag-version=false`);
    }
}

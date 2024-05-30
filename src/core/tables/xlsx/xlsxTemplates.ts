import { workbookProperties } from "./xlsxPropertyConstants";

export const workbookTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook ${workbookProperties.join(' ')}>
  <workbookPr/>
  <sheets>
    <sheet state="visible" name="Sheet1" sheetId="1" r:id="rId3"/>
  </sheets>
  <definedNames/>
  <calcPr/>
</workbook>`;

export const relationsTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships
xmlns="http://schemas.openxmlformats.org/package/2006/relationships"
>
    <Relationship
    Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
    Target="xl/workbook.xml"
    />
</Relationships>`;

export const workbookRelationsTemplate = `<?xml version="1.0" ?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship
    Id="rId3"
    Target="worksheets/sheet1.xml" 
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    />
</Relationships>`;

export const contentTypesTemplate = `<?xml version="1.0" ?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
    <Default ContentType="application/xml" Extension="xml"/>
    <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>
    <Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml"/>
    <Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/>
</Types>`;
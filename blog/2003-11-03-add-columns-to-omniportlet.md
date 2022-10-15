---
title: "Add columns to OmniPortlet"
---

I had some questions about the limitation to 5 columns of the
OmniPortlet tabular layout. Here is a tip to add more columns to this
layout:

1. backup the current OmniPortlet provider.xml
`/OC4J_HOME/applications/portalTools/omniPortlet/WEB-INF/providers/omniPortlet`

2. You can now open the file, and look for the tag `<dataField`


3. You can add new fields, by copying the existing `<dataField>` tag and
change the value of the `<name>` and `<displayName>`

<!-- Here is a complete example -->

``` xml
<dataField class="oracle.webdb.reformlet.definition.DataFieldDefinition">
<name>Field6</name>
<displayName>Column6</displayName>
<description>Field6</description>
<text>##column##</text>

<alignment>left</alignment>
<displayAs>hidden</displayAs>
<type>linebreak</type>
<font>Arial.3.Plain.None</font>

<color>#000000</color>
<style>none</style>
<styleType>custom</styleType>
</dataField>
```

The same logic could be used to add parameters or events to the OmniPortlet.

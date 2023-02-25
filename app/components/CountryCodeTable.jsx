var React = require("react");

var CountryCodeTable = (props) => {
    return (
        <div class="view-content">
            <h1>Country Code Table</h1>
      <div class="table-responsive">
<table class="views-table cols-4 table table-hover table-striped">
        <thead>
      <tr>
                  <th class="views-field views-field-name active">
            <a href="/countries-by-region?field_region_tid=All&amp;name=&amp;order=name&amp;sort=desc" title="sort by Country" class="active">Country<span class="icon-after icon glyphicon glyphicon-chevron-up" data-toggle="tooltip" data-placement="bottom" title="" aria-hidden="true" data-original-title="sort descending"></span>
</a>          </th>
                  <th class="views-field views-field-field-country-code">
            <a href="/countries-by-region?field_region_tid=All&amp;name=&amp;order=field_country_code&amp;sort=asc" title="sort by Country Code" class="active">Country Code</a>          </th>
                  <th class="views-field views-field-field-region">
            <a href="/countries-by-region?field_region_tid=All&amp;name=&amp;order=field_region&amp;sort=asc" title="sort by Region" class="active">Region</a>          </th>
                  <th class="views-field views-field-field-region-code">
            Region Code          </th>
              </tr>
    </thead>
    <tbody>
          <tr class="odd views-row-first">
                  <td class="views-field views-field-name active">
            Afghanistan          </td>
                  <td class="views-field views-field-field-country-code">
            AF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Albania          </td>
                  <td class="views-field views-field-field-country-code">
            AL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Algeria          </td>
                  <td class="views-field views-field-field-country-code">
            DZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            American Samoa          </td>
                  <td class="views-field views-field-field-country-code">
            AS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Andorra          </td>
                  <td class="views-field views-field-field-country-code">
            AD          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Angola          </td>
                  <td class="views-field views-field-field-country-code">
            AO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Anguilla          </td>
                  <td class="views-field views-field-field-country-code">
            AI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Antarctica          </td>
                  <td class="views-field views-field-field-country-code">
            AQ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/antarctica" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Antarctica</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ANT          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Antigua and Barbuda          </td>
                  <td class="views-field views-field-field-country-code">
            AG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Argentina          </td>
                  <td class="views-field views-field-field-country-code">
            AR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Armenia          </td>
                  <td class="views-field views-field-field-country-code">
            AM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Aruba          </td>
                  <td class="views-field views-field-field-country-code">
            AW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Australia          </td>
                  <td class="views-field views-field-field-country-code">
            AU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Austria          </td>
                  <td class="views-field views-field-field-country-code">
            AT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Azerbaijan          </td>
                  <td class="views-field views-field-field-country-code">
            AZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Bahamas, The          </td>
                  <td class="views-field views-field-field-country-code">
            BS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Bahrain          </td>
                  <td class="views-field views-field-field-country-code">
            BH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Bangladesh          </td>
                  <td class="views-field views-field-field-country-code">
            BD          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Barbados          </td>
                  <td class="views-field views-field-field-country-code">
            BB          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Belarus          </td>
                  <td class="views-field views-field-field-country-code">
            BY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Belgium          </td>
                  <td class="views-field views-field-field-country-code">
            BE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Belize          </td>
                  <td class="views-field views-field-field-country-code">
            BZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Benin          </td>
                  <td class="views-field views-field-field-country-code">
            BJ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Bermuda          </td>
                  <td class="views-field views-field-field-country-code">
            BM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/north-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">North America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            NAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Bhutan          </td>
                  <td class="views-field views-field-field-country-code">
            BT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Bolivia          </td>
                  <td class="views-field views-field-field-country-code">
            BO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Bonaire          </td>
                  <td class="views-field views-field-field-country-code">
            BQ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Bosnia and Herzegovina          </td>
                  <td class="views-field views-field-field-country-code">
            BA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Botswana          </td>
                  <td class="views-field views-field-field-country-code">
            BW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Bouvet Island          </td>
                  <td class="views-field views-field-field-country-code">
            BV          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/antarctica" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Antarctica</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ANT          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Brazil          </td>
                  <td class="views-field views-field-field-country-code">
            BR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            British Indian Ocean Territory          </td>
                  <td class="views-field views-field-field-country-code">
            IO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            British Virgin Islands          </td>
                  <td class="views-field views-field-field-country-code">
            VG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Brunei          </td>
                  <td class="views-field views-field-field-country-code">
            BN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Bulgaria          </td>
                  <td class="views-field views-field-field-country-code">
            BG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Burkina Faso          </td>
                  <td class="views-field views-field-field-country-code">
            BF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Burundi          </td>
                  <td class="views-field views-field-field-country-code">
            BI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Cambodia          </td>
                  <td class="views-field views-field-field-country-code">
            KH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Cameroon          </td>
                  <td class="views-field views-field-field-country-code">
            CM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Canada          </td>
                  <td class="views-field views-field-field-country-code">
            CA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/north-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">North America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            NAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Cape Verde          </td>
                  <td class="views-field views-field-field-country-code">
            CV          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Cayman Islands          </td>
                  <td class="views-field views-field-field-country-code">
            KY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Central African Republic          </td>
                  <td class="views-field views-field-field-country-code">
            CF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Chad          </td>
                  <td class="views-field views-field-field-country-code">
            TD          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Chile          </td>
                  <td class="views-field views-field-field-country-code">
            CL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            China          </td>
                  <td class="views-field views-field-field-country-code">
            CN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Christmas Island          </td>
                  <td class="views-field views-field-field-country-code">
            CX          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Cocos (Keeling) Islands          </td>
                  <td class="views-field views-field-field-country-code">
            CC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Colombia          </td>
                  <td class="views-field views-field-field-country-code">
            CO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Comoros          </td>
                  <td class="views-field views-field-field-country-code">
            KM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Cook Islands          </td>
                  <td class="views-field views-field-field-country-code">
            CK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Costa Rica          </td>
                  <td class="views-field views-field-field-country-code">
            CR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Cote D'Ivoire          </td>
                  <td class="views-field views-field-field-country-code">
            CI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Croatia          </td>
                  <td class="views-field views-field-field-country-code">
            HR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Cuba          </td>
                  <td class="views-field views-field-field-country-code">
            CU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Curacao          </td>
                  <td class="views-field views-field-field-country-code">
            CW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Cyprus          </td>
                  <td class="views-field views-field-field-country-code">
            CY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Czech Republic          </td>
                  <td class="views-field views-field-field-country-code">
            CZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Democratic Republic of the Congo          </td>
                  <td class="views-field views-field-field-country-code">
            CD          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Denmark          </td>
                  <td class="views-field views-field-field-country-code">
            DK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Djibouti          </td>
                  <td class="views-field views-field-field-country-code">
            DJ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Dominica          </td>
                  <td class="views-field views-field-field-country-code">
            DM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Dominican Republic          </td>
                  <td class="views-field views-field-field-country-code">
            DO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Ecuador          </td>
                  <td class="views-field views-field-field-country-code">
            EC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Egypt          </td>
                  <td class="views-field views-field-field-country-code">
            EG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            El Salvador          </td>
                  <td class="views-field views-field-field-country-code">
            SV          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Equatorial Guinea          </td>
                  <td class="views-field views-field-field-country-code">
            GQ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Eritrea          </td>
                  <td class="views-field views-field-field-country-code">
            ER          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Estonia          </td>
                  <td class="views-field views-field-field-country-code">
            EE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Ethiopia          </td>
                  <td class="views-field views-field-field-country-code">
            ET          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Falkland Islands          </td>
                  <td class="views-field views-field-field-country-code">
            FK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Faroe Islands          </td>
                  <td class="views-field views-field-field-country-code">
            FO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Federated States of Micronesia          </td>
                  <td class="views-field views-field-field-country-code">
            FM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Fiji          </td>
                  <td class="views-field views-field-field-country-code">
            FJ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Finland          </td>
                  <td class="views-field views-field-field-country-code">
            FI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            France          </td>
                  <td class="views-field views-field-field-country-code">
            FR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            French Guiana          </td>
                  <td class="views-field views-field-field-country-code">
            GF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            French Polynesia          </td>
                  <td class="views-field views-field-field-country-code">
            PF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            French Southern Territories          </td>
                  <td class="views-field views-field-field-country-code">
            TF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Gabon          </td>
                  <td class="views-field views-field-field-country-code">
            GA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Gambia, The          </td>
                  <td class="views-field views-field-field-country-code">
            GM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Georgia          </td>
                  <td class="views-field views-field-field-country-code">
            GE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Germany          </td>
                  <td class="views-field views-field-field-country-code">
            DE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Ghana          </td>
                  <td class="views-field views-field-field-country-code">
            GH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Gibraltar          </td>
                  <td class="views-field views-field-field-country-code">
            GI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Greece          </td>
                  <td class="views-field views-field-field-country-code">
            GR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Greenland          </td>
                  <td class="views-field views-field-field-country-code">
            GL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/arctic" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Arctic</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ARC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Grenada          </td>
                  <td class="views-field views-field-field-country-code">
            GD          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Guadeloupe          </td>
                  <td class="views-field views-field-field-country-code">
            GP          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Guam          </td>
                  <td class="views-field views-field-field-country-code">
            GU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Guatemala          </td>
                  <td class="views-field views-field-field-country-code">
            GT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Guernsey          </td>
                  <td class="views-field views-field-field-country-code">
            GG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Guinea          </td>
                  <td class="views-field views-field-field-country-code">
            GN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Guinea-Bissau          </td>
                  <td class="views-field views-field-field-country-code">
            GW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Guyana          </td>
                  <td class="views-field views-field-field-country-code">
            GY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Haiti          </td>
                  <td class="views-field views-field-field-country-code">
            HT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Heard Island and McDonald Islands          </td>
                  <td class="views-field views-field-field-country-code">
            HM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/antarctica" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Antarctica</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ANT          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Honduras          </td>
                  <td class="views-field views-field-field-country-code">
            HN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Hong Kong          </td>
                  <td class="views-field views-field-field-country-code">
            HK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Hungary          </td>
                  <td class="views-field views-field-field-country-code">
            HU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Iceland          </td>
                  <td class="views-field views-field-field-country-code">
            IS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/arctic" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Arctic</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ARC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            India          </td>
                  <td class="views-field views-field-field-country-code">
            IN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            India          </td>
                  <td class="views-field views-field-field-country-code">
            IN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Indonesia          </td>
                  <td class="views-field views-field-field-country-code">
            ID          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Iran          </td>
                  <td class="views-field views-field-field-country-code">
            IR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Iraq          </td>
                  <td class="views-field views-field-field-country-code">
            IQ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Ireland          </td>
                  <td class="views-field views-field-field-country-code">
            IE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Isle of Man          </td>
                  <td class="views-field views-field-field-country-code">
            IM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Israel          </td>
                  <td class="views-field views-field-field-country-code">
            IL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Italy          </td>
                  <td class="views-field views-field-field-country-code">
            IT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Jamaica          </td>
                  <td class="views-field views-field-field-country-code">
            JM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Japan          </td>
                  <td class="views-field views-field-field-country-code">
            JP          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Jersey          </td>
                  <td class="views-field views-field-field-country-code">
            JE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Jordan          </td>
                  <td class="views-field views-field-field-country-code">
            JO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Kazakhstan          </td>
                  <td class="views-field views-field-field-country-code">
            KZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Kenya          </td>
                  <td class="views-field views-field-field-country-code">
            KE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Kiribati          </td>
                  <td class="views-field views-field-field-country-code">
            KI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Kosovo          </td>
                  <td class="views-field views-field-field-country-code">
            XK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Kuwait          </td>
                  <td class="views-field views-field-field-country-code">
            KW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Kyrgyzstan          </td>
                  <td class="views-field views-field-field-country-code">
            KG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Laos          </td>
                  <td class="views-field views-field-field-country-code">
            LA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Latvia          </td>
                  <td class="views-field views-field-field-country-code">
            LV          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Lebanon          </td>
                  <td class="views-field views-field-field-country-code">
            LB          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Lesotho          </td>
                  <td class="views-field views-field-field-country-code">
            LS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Liberia          </td>
                  <td class="views-field views-field-field-country-code">
            LR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Libya          </td>
                  <td class="views-field views-field-field-country-code">
            LY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Liechtenstein          </td>
                  <td class="views-field views-field-field-country-code">
            LI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Lithuania          </td>
                  <td class="views-field views-field-field-country-code">
            LT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Luxembourg          </td>
                  <td class="views-field views-field-field-country-code">
            LU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Macau          </td>
                  <td class="views-field views-field-field-country-code">
            MO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Macedonia          </td>
                  <td class="views-field views-field-field-country-code">
            MK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Madagascar          </td>
                  <td class="views-field views-field-field-country-code">
            MG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Malawi          </td>
                  <td class="views-field views-field-field-country-code">
            MW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Malaysia          </td>
                  <td class="views-field views-field-field-country-code">
            MY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Maldives          </td>
                  <td class="views-field views-field-field-country-code">
            MV          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Mali          </td>
                  <td class="views-field views-field-field-country-code">
            ML          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Malta          </td>
                  <td class="views-field views-field-field-country-code">
            MT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Marshall Islands          </td>
                  <td class="views-field views-field-field-country-code">
            MH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Martinique          </td>
                  <td class="views-field views-field-field-country-code">
            MQ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Mauritania          </td>
                  <td class="views-field views-field-field-country-code">
            MR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Mauritius          </td>
                  <td class="views-field views-field-field-country-code">
            MU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Mayotte          </td>
                  <td class="views-field views-field-field-country-code">
            YT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Mexico          </td>
                  <td class="views-field views-field-field-country-code">
            MX          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/north-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">North America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            NAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Moldova          </td>
                  <td class="views-field views-field-field-country-code">
            MD          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Monaco          </td>
                  <td class="views-field views-field-field-country-code">
            MC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Mongolia          </td>
                  <td class="views-field views-field-field-country-code">
            MN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Montenegro          </td>
                  <td class="views-field views-field-field-country-code">
            ME          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Montserrat          </td>
                  <td class="views-field views-field-field-country-code">
            MS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Morocco          </td>
                  <td class="views-field views-field-field-country-code">
            MA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Mozambique          </td>
                  <td class="views-field views-field-field-country-code">
            MZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Myanmar          </td>
                  <td class="views-field views-field-field-country-code">
            MM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Namibia          </td>
                  <td class="views-field views-field-field-country-code">
            NA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Nauru          </td>
                  <td class="views-field views-field-field-country-code">
            NR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Nepal          </td>
                  <td class="views-field views-field-field-country-code">
            NP          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Netherlands          </td>
                  <td class="views-field views-field-field-country-code">
            NL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            New Caledonia          </td>
                  <td class="views-field views-field-field-country-code">
            NC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            New Zealand          </td>
                  <td class="views-field views-field-field-country-code">
            NZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Nicaragua          </td>
                  <td class="views-field views-field-field-country-code">
            NI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Niger          </td>
                  <td class="views-field views-field-field-country-code">
            NE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Nigeria          </td>
                  <td class="views-field views-field-field-country-code">
            NG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Niue          </td>
                  <td class="views-field views-field-field-country-code">
            NU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Norfolk Island          </td>
                  <td class="views-field views-field-field-country-code">
            NF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            North Korea          </td>
                  <td class="views-field views-field-field-country-code">
            KP          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Northern Mariana Islands          </td>
                  <td class="views-field views-field-field-country-code">
            MP          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Norway          </td>
                  <td class="views-field views-field-field-country-code">
            NO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Oman          </td>
                  <td class="views-field views-field-field-country-code">
            OM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Pakistan          </td>
                  <td class="views-field views-field-field-country-code">
            PK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Palau          </td>
                  <td class="views-field views-field-field-country-code">
            PW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Palestine          </td>
                  <td class="views-field views-field-field-country-code">
            PS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Panama          </td>
                  <td class="views-field views-field-field-country-code">
            PA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Papua New Guinea          </td>
                  <td class="views-field views-field-field-country-code">
            PG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Paraguay          </td>
                  <td class="views-field views-field-field-country-code">
            PY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Peru          </td>
                  <td class="views-field views-field-field-country-code">
            PE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Philippines          </td>
                  <td class="views-field views-field-field-country-code">
            PH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Pitcairn Islands          </td>
                  <td class="views-field views-field-field-country-code">
            PN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Poland          </td>
                  <td class="views-field views-field-field-country-code">
            PL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Portugal          </td>
                  <td class="views-field views-field-field-country-code">
            PT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Puerto Rico          </td>
                  <td class="views-field views-field-field-country-code">
            PR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Qatar          </td>
                  <td class="views-field views-field-field-country-code">
            QA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Republic of the Congo          </td>
                  <td class="views-field views-field-field-country-code">
            CG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Reunion          </td>
                  <td class="views-field views-field-field-country-code">
            RE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Romania          </td>
                  <td class="views-field views-field-field-country-code">
            RO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Russia          </td>
                  <td class="views-field views-field-field-country-code">
            RU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Rwanda          </td>
                  <td class="views-field views-field-field-country-code">
            RW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Saint Barthelemy          </td>
                  <td class="views-field views-field-field-country-code">
            BL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Saint Helena          </td>
                  <td class="views-field views-field-field-country-code">
            SH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Saint Kitts and Nevis          </td>
                  <td class="views-field views-field-field-country-code">
            KN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Saint Lucia          </td>
                  <td class="views-field views-field-field-country-code">
            LC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Saint Martin          </td>
                  <td class="views-field views-field-field-country-code">
            MF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Saint Pierre and Miquelon          </td>
                  <td class="views-field views-field-field-country-code">
            PM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/north-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">North America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            NAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Saint Vincent and the Grenadines          </td>
                  <td class="views-field views-field-field-country-code">
            VC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Samoa          </td>
                  <td class="views-field views-field-field-country-code">
            WS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            San Marino          </td>
                  <td class="views-field views-field-field-country-code">
            SM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Sao Tome and Principe          </td>
                  <td class="views-field views-field-field-country-code">
            ST          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Saudi Arabia          </td>
                  <td class="views-field views-field-field-country-code">
            SA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Senegal          </td>
                  <td class="views-field views-field-field-country-code">
            SN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Serbia          </td>
                  <td class="views-field views-field-field-country-code">
            RS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Seychelles          </td>
                  <td class="views-field views-field-field-country-code">
            SC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Sierra Leone          </td>
                  <td class="views-field views-field-field-country-code">
            SL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Singapore          </td>
                  <td class="views-field views-field-field-country-code">
            SG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Sint Maarten          </td>
                  <td class="views-field views-field-field-country-code">
            SX          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Slovakia          </td>
                  <td class="views-field views-field-field-country-code">
            SK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Slovenia          </td>
                  <td class="views-field views-field-field-country-code">
            SI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Solomon Islands          </td>
                  <td class="views-field views-field-field-country-code">
            SB          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Somalia          </td>
                  <td class="views-field views-field-field-country-code">
            SO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            South Africa          </td>
                  <td class="views-field views-field-field-country-code">
            ZA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            South Georgia and South Sandwich Islands          </td>
                  <td class="views-field views-field-field-country-code">
            GS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            South Korea          </td>
                  <td class="views-field views-field-field-country-code">
            KR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            South Sudan          </td>
                  <td class="views-field views-field-field-country-code">
            SS          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Spain          </td>
                  <td class="views-field views-field-field-country-code">
            ES          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Spratly Islands          </td>
                  <td class="views-field views-field-field-country-code">
            SP          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Sri Lanka          </td>
                  <td class="views-field views-field-field-country-code">
            LK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Sudan          </td>
                  <td class="views-field views-field-field-country-code">
            SD          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Suriname          </td>
                  <td class="views-field views-field-field-country-code">
            SR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Svalbard And Jan Mayen          </td>
                  <td class="views-field views-field-field-country-code">
            SJ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Swaziland          </td>
                  <td class="views-field views-field-field-country-code">
            SZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Sweden          </td>
                  <td class="views-field views-field-field-country-code">
            SE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Switzerland          </td>
                  <td class="views-field views-field-field-country-code">
            CH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Syria          </td>
                  <td class="views-field views-field-field-country-code">
            SY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Taiwan          </td>
                  <td class="views-field views-field-field-country-code">
            TW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Tajikistan          </td>
                  <td class="views-field views-field-field-country-code">
            TJ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Tanzania          </td>
                  <td class="views-field views-field-field-country-code">
            TZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Thailand          </td>
                  <td class="views-field views-field-field-country-code">
            TH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Timor-Leste          </td>
                  <td class="views-field views-field-field-country-code">
            TL          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Togo          </td>
                  <td class="views-field views-field-field-country-code">
            TG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Tokelau          </td>
                  <td class="views-field views-field-field-country-code">
            TK          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Tonga          </td>
                  <td class="views-field views-field-field-country-code">
            TO          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Trinidad and Tobago          </td>
                  <td class="views-field views-field-field-country-code">
            TT          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Tunisia          </td>
                  <td class="views-field views-field-field-country-code">
            TN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Turkey          </td>
                  <td class="views-field views-field-field-country-code">
            TR          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Turkmenistan          </td>
                  <td class="views-field views-field-field-country-code">
            TM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Turks and Caicos Islands          </td>
                  <td class="views-field views-field-field-country-code">
            TC          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Tuvalu          </td>
                  <td class="views-field views-field-field-country-code">
            TV          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Uganda          </td>
                  <td class="views-field views-field-field-country-code">
            UG          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Ukraine          </td>
                  <td class="views-field views-field-field-country-code">
            UA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            United Arab Emirates          </td>
                  <td class="views-field views-field-field-country-code">
            AE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            United Kingdom          </td>
                  <td class="views-field views-field-field-country-code">
            GB          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            United States          </td>
                  <td class="views-field views-field-field-country-code">
            US          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/north-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">North America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            NAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            United States Minor Outlying Islands          </td>
                  <td class="views-field views-field-field-country-code">
            UM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Uruguay          </td>
                  <td class="views-field views-field-field-country-code">
            UY          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            US Virgin Islands          </td>
                  <td class="views-field views-field-field-country-code">
            VI          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/central-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Central America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            CAC          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Uzbekistan          </td>
                  <td class="views-field views-field-field-country-code">
            UZ          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Vanuatu          </td>
                  <td class="views-field views-field-field-country-code">
            VU          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Vatican City          </td>
                  <td class="views-field views-field-field-country-code">
            VA          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/europe" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Europe</a>          </td>
                  <td class="views-field views-field-field-region-code">
            EUR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Venezuela          </td>
                  <td class="views-field views-field-field-country-code">
            VE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/south-america" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">South America</a>          </td>
                  <td class="views-field views-field-field-region-code">
            SAM          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Vietnam          </td>
                  <td class="views-field views-field-field-country-code">
            VN          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/asia" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Asia</a>          </td>
                  <td class="views-field views-field-field-region-code">
            ASI          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Wallis and Futuna          </td>
                  <td class="views-field views-field-field-country-code">
            WF          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/oceania" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Oceania</a>          </td>
                  <td class="views-field views-field-field-region-code">
            OCN          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Western Sahara          </td>
                  <td class="views-field views-field-field-country-code">
            EH          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd">
                  <td class="views-field views-field-name active">
            Yemen          </td>
                  <td class="views-field views-field-field-country-code">
            YE          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/middle-east" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Middle East</a>          </td>
                  <td class="views-field views-field-field-region-code">
            MEA          </td>
              </tr>
          <tr class="even">
                  <td class="views-field views-field-name active">
            Zambia          </td>
                  <td class="views-field views-field-field-country-code">
            ZM          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
          <tr class="odd views-row-last">
                  <td class="views-field views-field-name active">
            Zimbabwe          </td>
                  <td class="views-field views-field-field-country-code">
            ZW          </td>
                  <td class="views-field views-field-field-region">
            <a href="/regions/africa" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Africa</a>          </td>
                  <td class="views-field views-field-field-region-code">
            AFR          </td>
              </tr>
      </tbody>
</table>
  </div>
    </div>
        
    );
}

module.exports = CountryCodeTable;
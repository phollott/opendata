# opendata
Open Data is Public

This repository comprises examples I have forked and modified using Mike Bostock's [d3.js](http://d3js.org/) (Data Driven Documents) library to support data visualization. Whereas his examples use the bl.ocks pastebin, I am storing these to Github, routed through jsFiddle, making them easy to fork and tweak. 

Contents include:
+ [D3 Quadrant Example](http://jsfiddle.net/gh/get/d3/3.0.4/phollott/opendata/tree/master/d3quadrant/)
+ [D3 Sunburst Example](http://jsfiddle.net/gh/get/d3/3.0.4/phollott/opendata/tree/master/d3sunburst/)
+ [D3 Treemap Example](http://jsfiddle.net/gh/get/d3/3.0.4/phollott/opendata/tree/master/d3treemap/)

My premise here is that Open Data projects will benefit most from:
+ Data Visualization
+ Data Enrichment
+ Smart Adaptation

Client-side libraries like d3.js provide superior Data Visualization.

Smart Adaptation
----------------

*Smart adaptation* is a term I have started using to refer to any adaptation into a JSON format, especially when the JSON format is Atom-based. I am borrowing the idea of "JSON Bundles" from HL7 FHIR, but essentially, these are just Atom syndication (similar to RSS), implemented using JSON instead of XML.

+ [HL7 FHIR JSON Bundles](http://www.hl7.org/implement/standards/fhir/extras.html#bundle)

Smart adaptation is smart because JSON is more useful on the client-side than XML; but XML, which can be thoroughly validated, is more useful on the server-side. So they both have their charms.

Smart Adaptation
================

*Smart adaptation* is a term I have started using to refer to any adaptation into a JSON format, especially when the JSON format is Atom-based. I am borrowing the idea of "JSON Bundles" from HL7 FHIR, but essentially, these are just Atom syndication (similar to RSS), implemented using JSON instead of XML.

+ [HL7 FHIR JSON Bundles](http://www.hl7.org/implement/standards/fhir/extras.html#bundle)

Smart adaptation is smart because JSON is more useful on the client-side than XML; but XML, which can be thoroughly validated, is more useful on the server-side. So they both have their charms.

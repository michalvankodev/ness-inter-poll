While creating the architecture and DB for ness-inter-poll we have to have in mind these main concerns:
- Resources available
- Scaleability
- Business value of features

For our case and designed architecture we concern these db properties:

![Db features preview](https://github.com/michalvankodev/ness-inter-poll/blob/master/assets/DBCharacteristicEvaluation.png?raw=true)

We choose MongoDb with document type, consistence and Partion tolerant feature. Because our data scheme is flexible and can even change during development phase we go with unstructured db to deliver MVP as soon as possible. DB was chosen based on resources and vertical scalability defined in the architecture design. The DB configuration is single master, which is replicated. The clients read/write to primary db.

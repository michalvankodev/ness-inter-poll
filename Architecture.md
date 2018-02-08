### Ness inter-poll architecture

![Architecture preview](https://github.com/michalvankodev/ness-inter-poll/blob/master/assets/architecture-diagram.png)

While creating the architecture for ness-inter-poll we have to have in mind these main concerns:
- Resources available
- Scaleability
- Business value of features

In this diagram you can see that many of the services are scaleable.
While application is not adopted, we don't have to build the most scaleable architecture.
But we have to have in mind that there has to be a way how to scale.
Adding real-time interactivity could be implemented with one Websocket service and Message bus can be added into stack later when needed.

For our use case web socket service doesn't have a big business value while the requirements are not for being real-time poll/survey application.

Description of the diagram:
1. Client will download static assets from a static server / CDN
2. Data transmission should go through Load balancer which should route request to the different services (on the same host)
3. REST API will download needed data from database.
4. In this case we can see that Database will be the bottleneck for our solution. 
5. Websocket services will be notified of changes from REST API and they will notify clients with updated resources.
6. Publishing polls will be directly sending emails loaded from LDAP service via mailserver.
7. CI/CD service is responsible for checking git repository for changes and then deploy when necessary.
8. While deployment CI/CD has to take care of triggering database backup and migrations.
9. Database backup should happen at reasonable times on regular.
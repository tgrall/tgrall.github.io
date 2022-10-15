---
title: "Interest of Enterprise Portals"

categories: portal
---
I am writing this post as an answer to [Christian Faure's blog post](http://www.christian-faure.net/2009/01/31/de-linteret-dun-portail-dentreprise/), (in French), about interest of enterprise portals. Let me take each point, one by one and comment them. I won't go in the all the details of many other points that why new enterprise portals are interesting for many of us, I just want to focus on Christian's remarks.

<!-- truncate -->

### Single Access Point

> Christian's quote: I do not need it, I have bookmarks, that I can put in any of my internet browser, allowing me to access any Web applications that I am using.

I think that here it is a little broader that simply the bookmarks, but let starts with this.

Some other important part of the "single access point" is the fact that it becomes your home page in your working environment where you not only have access to many "links"  but also you have some information that are pushed to you in a personalized and automatic fashion without having to go to each applications, some example:

* a manager see that he has some holiday or expenses to approve
* a content editor see which content has been modified and should be validated to be published.

Another interesting point, is the fact that the IT &amp; Business people define together what is the important view for this "portal home page" providing automatically the needed information to the users depending of its profile.

Finally you can access your portal from everywhere, from any browser, so your “working environment” is always with you - from any browser, or computer/device. If you are using your browser bookmark you are “limited” to your computer only (I know you can use internet bookmak service à la Delicious)

##### Many Application screens in the same time

> Christian's quote: I do not need that since I can use many windows, or tabs in my Web browser

First of all, deploying a portal does not mean that you "must" execute all the applications in it. But I have to admit that it is quite useful to be able to have a quick overview of all the applications, content that you need to be aware of. When designing your portal you first design the way you want to aggregate the content based on the user profiles/roles. This is a key point in a portal project, you need to take time to choose the information you will make available to your user.

I can reuse the example of the business process/workflow validation from the portal page. Since you are authenticated, information can be pushed to your page to inform you that you have some tasks to manage and this without to have to go to the application itself. It could make you more efficient.

All these do not mean that you have many application screens in the same time but an overview of your most important application. Then based on the design of your application or portal you will jump to the application in another window/tab, or use the application in the portal.

### Single Authentication Point

> Christian's quote:  Any Active Directory or LDAP will do that the same way

Portal is not necessary a "Single Authentication Point" it depends how you look at it.

If you have multiple Web applications, including the portal, Portal is not necessary the single entry point, any application that will share the same SSO will be the entry point. You will access one of the application (the portal or another), the SSO will ask you for your crendetials, that will then be shared by all the applications in the same “domain”.  A good example is the Google applications, you are not forced to enter the system by iGoogle (the portal) to access in a secured way all the applications. This is a pure WebSSO concern that is not directly related to Enterprise Portals.

That said, Portals provide also a mechanism for SSO. The portal is here to propagate the identity to all the application that are integrated with it.

Let’s reuse the example of the expenses validation. The manager is authenticated to the portal. The workflow/BPM application is integrated to the portal as portlet (most BPM product provides such portlets, in eXo Platform we have dedicated portlet allowing you to integrate easily JBPM and OW2 Bonita). The cool thing here is the fact that the user identity is transmitted by the portal to the portlet so the “BPM” portlet knows who the user is and can execute the process in this context.  (You do not have to configure a WebSSO here since the credentials are managed by the backend)

### Portal provides 'personnalized views'

> Christian's quote:  Who needs that?

Here we need to see two points:

1. the personalization: the end user that really has it "own and Personalized" page
2. the profiling: a view of the portal that is based on the profile (group, business role) of the connected user.

*Personalization*

For the first point, personalization, we need to see what are the various personalization features that a portal can offer to the users.

It is true that many portals, including eXo Portal with User Pages, allow any user to create, rearrange pages. This features has probably most of the time be oversold by the vendors. Standard users do not "adapt" their tools, they most of the time use the portal as it is defined by the managers.

Another very important part of the personalization is the fact that portlets can be personalized to the user (by him or for him), for example a WebMail portlet that allows you to see "your" mails and select some properties (number of mails per pages, order, ...) This part is quite useful when you put a portal in place.

Finally, with the arrivals of new generation “consumer portals” such as iGoogle, Netvibes, ... users have started to create their own dashboard based on a set of simple gadgets. Enterprise Portal, starting with eXo Portal, provide now these features that are simpler to use than standard portal page creation.

*Profiling*

So personalization is quite important but the real benefits of most of the enterprise portals, so not come directly from the “personalization” but more from the profiling. The portal, and applications are managed based on the role of the user in the enterprise.

The pages you can see, the content of the applications available on the pages are not managed directly by you, but by your role. This is very useful to help people to be more productive. The flip side of that: when designing/deploying a portal it is important to take some time to understand the way people are working to give them “their portal”. The use of the profiling will help the IT to provide a business view of the information system.

### An page with integrated applications

> Christian's quote:  Who is "working in a portal? A simple personalizes page with widgets will offer me the perfect dashboard to manage my daily work and launch a full page with the application if needed.

For sure today's portal are not built to be used directly to "work" in them, but this is more a design issue, than an user experience one. When the application is already built and working perfectly used in a stand alone mode, no point to entirely "portletize" it to run it in the portal. When it is the case just develop Web services and publish them in the portal using Portlets or Gadgets.

At the opposite when you build a new application from scratch, it may be useful to develop it to be executed in a Portal, to leverage interesting services of a portal: profiling, integrated SSO, centralized management, ... The integration of applications in Portal are made even simpler today with the concept of Portlet Bridges allowing the developer to use a rich framework (JSF, Seam, ...) and publish the application in the portal.

Yes I do agree with that, you can see the portal as simple dashboard, but in reality if you take some time to design it properly you can also use the application in it. Portlets have been made for that. You can for example design your applications/portlets to leverage the state of the portlet: when normal you use it as a “simple view” on your dashboard, when maximize you can use the full application.

Another important point, it is the fact that with the portal the user has a virtualize working environnement that is not dependant of the client machine but work in a simple browser. With eXo WebOS, we have pushed the concept further to provide a Web based operating system giving access in a multi window environment to the various application and content from anywhere with a rich user experience. (So we are pushing all the benefits of Enterprise Portal into an virtual operating system)

### Conclusion

In my opinion enteprise portals are still very interesting. We need to keep in mind that here we are talking about "enterprise", just to say that deploying a portal in the enteprise is also here to provide consistent user experience to the user, facilitate the management of the applications and users for the IT, etc etc...

Like any other IT project, the Portal project should be managed and validated by user and management (Business and IT), if not it will be a failure. So when starting such project it is important to scope it correctly and deploy it step by step. (it is a content oriented portal or an intergration one?; which type of users will be the first audience? Which content &amp; data will be the most important for them, ...) Another important point is, on the technology side, how the portal that I will chose can be integrated with my current IS?  Finally when you start the project always start with the "most bang for the buck" approach, choose the community of users and applications that will help you to sell the project.

In my arguments, I have been focused on a very centralized view of the enterprise (the IT and Business people choose for the rest of us), this is because it is one important point in current portal project. But do not get me wrong, I am also a big fan of the community driven portals and tools. The next step in the portal deployment is to give more power to the user letting them create not "their own portal" but use the existing infrastructure to create portals/sub-portals based on their center of interest/role in the enterprise. This is where all the concepts coming from the Social Networks will be very useful in the enterprise, At eXo Platform, we have integrated in our portal an Open Social container, that is fully working in the context of the Portal and Web OS to facilitate the created of Enterprise Social Network Portals.

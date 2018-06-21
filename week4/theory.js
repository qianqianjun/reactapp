/**
 * Created by Gaoqian on 2018/5/14.
 */

/**
 * A.In your own words, explain what a Javascript module is.
 * What problem is solved by modules?
 * How are modules implemented in Javascript ES6?
 **/

/*
module is a self-contain unit of code with distinct functionality that helps with the code organization
of the app; it has the same benefit as the function ,class and component at the outer level of the
application code


First ,it helps to lessen the dependencies on parts of the code base as much as possible
Second ,it helps get out of the risk of the namespace pollution.
Third ,the reusability of the code. a module make it easy to
reuse the code that is already written in one place at another
place.

the ES6 standard module mechanism allows developers to create
modules containing specific function classes or object as one or
more symbols which can be made available to external consumers.
developer can export individually or an entire module collections of symbols

the module customer can include module symbols by importing individually
or entirely

 */

/**
 *B.Explain the trade-off between freedom and convention in application organisation?
    Describe the advantages and disadvantages of each approach and give your opinion about which approach you favour
 **/

/*
I want to answer this question in my own words because the lecture video introduce a lot to me and i can not
remember it all and now i am a little nervous and excited;

we don not have a standard for the application structure before ,so we have the freedom and flexibility to
develop a project such as naming file and component how much code we should put in each files.but however
with this kind of freedom there is a cost.no developer can easily share there work to others because their
different organization of the project . it make the cooperation of developer more complex.
so we should give up some freedom and adapt conventions. By doing this ,we have the standard such as where to
put files and how to name folders and how to build components and how to build and share these with others.
and adapting to conventions surly solve the problem above.

if we have the freedom and flexibility ,we can organization the project as we want and like,but it make the
cooperation between developers more hard , adapting to conventions benefits the work sharing and we don not
have to explain how we organize the project and so on ,because it was known to everyone.
sometimes,obey to the standard may make some solution of problem even more complex and it was not easy to accept
and familiar with a standard in a short time.

I select to obey the conventions because i want to share works with others,i want to cooperate with other people

    */

/**
 C .Define and compare the concepts of:
 (a) “write once, run everywhere”
 (b) “learn once, write everywhere”
 (c) What is React Native considered to the the second type of development system?
 **/

/*
(a) write once ,run everywhere means creating a portable application from a single codebase ,and it can
 be run well on all devices including phones tablets and desktops regardless of the hardware or operating system.
(b) learn once ,write everywhere means the language we use to develop can be used to develop different
platform application. for example , we can not write a android application by using object-c or swift. so we
can not write other platform application after learn them.
(c)
 Android and ios are different platforms whose vendors have little argument and standard between each other
 React native provides a web like abstraction on top of them.It does a good job at making the differences between
 two platforms as transparent as possible. so you can use react-native to develop android and ios application,
 learn react-native ,develop different platform application.
 */


/**
 d. Why do you think that React Native needs to provide support for platformspecific components in its standard
 component library?
*/

/*
 The platform specific components exists because these components are abstractions of underlying user interface functionality
 which is either visually or semantically different between iOS and Android. Developers choose the platform with
 specific components to have their app be more authentic and intuitive for users on those target platforms.

 第二组的存在是因为这些组件是基础用户界面功能的抽象，这些功能在iOS和Android之间在视觉上或语义上不同。 开发人员选择具有特定组件
 的平台，让他们的应用对这些目标平台上的用户更真实和直观。
 */


/**
 e. Describe the event system in React Native and explain how to handle events in a React Native App
 **/
/*
 we can consider it as an event loop which waits synchronously for messages or events to arrive and then be processed in turn
 to completion. Now the to completion means the processing cannot be pre-empted.

the event dispatcher controls the event which arrives early to finish first before looping around and processing the next event.
the event handlers execute fast. control can be returned to the event loop dispatcher to process the next waiting event.


 All UI event processing are handled in the same global event loop.
 */



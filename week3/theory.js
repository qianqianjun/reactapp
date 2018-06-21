/**
 * Created by Gaoqian on 2018/5/5.
 */
import React, {component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

/**
 a Explain what a React Native components does. What are the main advantages of the components abstraction.
 */
/*

display information to a user or capture information from a user.

(A react native components is a user interface components which is used to display information to a user or capturing
information from a user such as text list inputAreas buttons images and so on. A user interface is associated with
two important aspects namely its presentation and its behavior.The first aspect the presentation of a components
can be visual in nature such as an image or a video or an input text field. A presentation components can also
be audible such as a sound effect or a presentation components can be haptic in nature such as a vibration on the
device.For this purpose We will define the second aspect the components behavior as what actions can be taken
based on user feedback or input to the components.)

the components abstraction is central to enforce the single responsibility principle
which make designs and code more maintainable
less tightly coupled and more easily extended and more easily testable during development.

(the idea of separation of concerns in software development is a design principle for separating application
logic in tow distinct section each addressing its own separate concern.
the idea has related to the single responsibility principle whose objective is to make designs and code more maintainable
less tightly coupled and therefore more easily extended and more easily testable during development. In react Native
app development the components abstraction is central to enforcing the principle.)

It can be used an different platform,such as Android and Ios.
 */

/**
 * b Describe what a stateless component is and how to create one. List three example use cases
 * for stateless components
 */

/*
 stateless means constructing compilers do not hold any state. Stateless components usually just render
 user interface elements and delegate any state management, if required, to other components.

a stateless components can be constructed using a function.
1.stateless functional components,stateless functional components is just a function which return some
rendered value.

2. some built-in components such as Title View styleSheet and so on.we can nested some built-in components
to define our own components.

3.we create our own components by extend the components class in react-native.
*/
const Title=()=>(
    <Text>
        the content of the title.
    </Text>
);
const information=()=>(
    <Text>
        author:name   time: 2018
    </Text>
);
const content=()=>(
    <articleContent>
        this is the content of the article.
        this is the content of the article.
    </articleContent>
);

const article=()=>(
    <view>
        <title/>
        <information/>
        <content/>
    </view>
);


/*

 */

/**
 * c Explain what is meant by state in a React Native App. Why do we need to deal with state in applications?
 */
/*
 The state is some data associated with a components.

 Even simple apps usually need to handle mutable state logic somewhere and somehow so stateless components
  won't suffice for all of our needs.

 Application state deals with the reality that even simple applications need to deal with data and
 that data is likely to change over time as the user interacts with the app.

 */


/**
 * D Describe how React Native components can handle state. Explain how to delegate state handling on
 * behalf of stateless components in React Native.
 */

/*
(A stateful components is declare as a javascript class using the ESX class syntax. To be react components this class must extend
the built-iin react components class provided within the react library.
We actually need to create a state data structure to make the components have state.
And to do this we include a constructor method on our class components.
Now note that a javascript class constructor is a method named by the constructor keyword.
As you might expect the constructor is called when the class is instantiated.
The constructor arguments will receive any properties passed to this components when it's instantiated in the JSX syntax.
And we must call the superclass constructor with these optional properties before we can do anything else.
Then we create a state object on our instance state via this keyword.
The this keyword is how we access instance data in javascript.
The state object is available via the this keyword in our class methods.
For example if we add a name attribute which is a string to the components in the state constructor later
we can access this named value from the 'this.state'.
So accessing state is simply a matter of reading the state object using normal JSX syntax.)




We use the set state method on our state to change the state.
accessing state is simply a matter of reading the state object using normal JSX syntax.
we can access the named value from the 'this.state'.


the stateless components which are nested inside a stateful components.
The Stateful components is then responsible for managing any state of its nested children.
 */

/**
 * E  Explain how the React Native stateful component lifecycle works. Describe three lifecycle hooks and what they
 * can be used for
 */
/*
React native defines a set of lifecycle events for stateful components and a way for the app developer to take actions when
each lifecycle event occurs;

we can write some function inside a lifecycle event,when the lifecycle event occurs ,the function will be called to do something.

1.The constructor is the right place to initialize the state.
if you don not initialize state and you don not bind methods you don not need to implement a constructor
in the react components.
You can initialize status based on props by passing props into the constructor.


2.ComponentDidMount() is invoked immediately after a components is mounted.

if you need to load data from s remote endpoint ,it is a good place to instantiate that network request.

3.ComponentDidUpdate() is invoked immediately after updating occurs.

This is an opportunity to update the dom or frame buffer when the components has been updated.
This is also a good place to do network requests as long as you compare the current properties with the previous properties.



 */


















































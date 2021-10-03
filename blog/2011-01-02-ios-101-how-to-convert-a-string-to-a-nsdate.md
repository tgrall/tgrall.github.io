---
title: "iOS 101: How to convert a String to a NSDate"

categories: ios
---
During my vacations, I took some time to play with iOS development. I have been struggling with many small issues... This is the price to pay when learning a new technology, and this is part of the fun of doing it. I will try to document some of these issues in articles...  Let's start with a very common story : working with date.

Objective-C and iOS SDK provide a class to help formatting date (marshaling and unmarshaling), this class is [NSDateFormatter](http://developer.apple.com/library/mac/#documentation/Cocoa/Reference/Foundation/Classes/NSDateFormatter_Class/Reference/Reference.html). No surprise, the NSDateFormatter uses the [Unicode Date Format Patterns](http://unicode.org/reports/tr35/#Date_Format_Patterns).

A small example of date creating from a string:

``` objectivec

    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc]init];
    [dateFormatter setDateFormat:@"yyyy-MM-dd"];
    NSDate *date = [dateFormatter dateFromString:publicationDate ];
    [dateFormatter release];
     // use your date object
```

The date that I have to create from a sting looks like "`2010-11-12`". So I do not have any time information. When I do convert this string with the code above, the result is  "`2010-11-11 23:00:00 +0000`". As you can see the date is calculated from my current time zone, small reminder I am in France. So the "date" object itself is perfectly fine, but in my example I want to have the date independently of the time.

To be able to manage the date without any time/timezone information, I can force the timezone I want to use when using the  `NSDateFormatter` class. I just need to use the `setTimeZone` instance method.

The code looks like that now (see line#3):

``` objectivec
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc]init];
    [dateFormatter setDateFormat:@"yyyy-MM-dd"];
    [dateFormatter setTimeZone:[NSTimeZone timeZoneForSecondsFromGMT:0]];
    NSDate *date = [dateFormatter dateFromString:publicationDate ];
    [dateFormatter release];
     // use your date object
```

Hope that helps!

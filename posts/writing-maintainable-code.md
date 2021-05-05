---
title: 'Writing Maintainable Code'
date: '2021-05-05'
---

# How to Write Maintainable Code

(Yes, this is a reference to Jeremy Miller's blog series and that will be the starting point for this blog post.)

Near the end of the my time during the Hack Reactor bootcamp, I found myself getting frustrated that I didn't have a good grasp on certain programming fundamentals; however, I couldn't quite figure out areas I was weak in. I had no sense of destination, much less an idea of how to get there.

So, today I decided to start working again on my FixNcell Gatsby website. I had started on that sometime last week and then dove into learning GraphQL when the tutorial came across that topic. One of the great and terrible things that happens when I'm doing tutorials like this is that I find myself going down rabbit holes of software development concepts. Maybe it's driven in part by my ADD brain or maybe in part by my desire to know every aspect of a topic I'm learning, but each time I see a link to "learn more about <_a particular topic_>" I click on it and find myself exploring down a vast tunnel system of newfound knowledge.

In today's rabbit hole journey, I came across Jeremy Miller's <a href="http://codebetter.com/jeremymiller/2006/12/06/on-writing-maintainable-code/" target="blank">**_How to Write Maintainable Code_**</a> "AHA!", I thought, "THIS is what I needed!!" **Something I learned from Hack Reactor is that anyone can code, but it takes a certain skillset and knowledge base to code _well_.** _"But what does it mean to code well?"_, I've been asking myself lately. Thus far, I know that to "code well" is to:

1. make your code _easy to change_
2. make your code _easy to understand_

Software _will_ be changed. I mean, if it isn't, then I guess it wasn't all that important in the first place. So we want to assume that our code is important enough to eventually be changed, and when that happens, we want to make it as easy as possible for future users (including ourselves) to understand the code and make changes to it. In other words, we want to make our code **maintainable**.

"...But what does it mean for our code to be *maintainable*??"

Well, *hopefully*, that is the question this blog series will answer.

In the first portion of Jeremy Miller's blog series, I came across this lovely table (copied verbatim from his webpage), with a fabulous summary of the concepts we should know to make our code maintainable:

<table border="1" width="100%">
<tbody>
<tr>
<td width="50%"><strong>Question</strong></td>
<td width="50%"><strong><em>Yes</em> comes from…</strong></td>
</tr>
<tr>
<td>Can I find the code related to the problem or the requested change?</td>
<td>Good Naming, High Cohesion, Single Responsibility Principle, Separation of Concerns</td>
</tr>
<tr>
<td>Can I understand the code?</td>
<td>Good Naming, Composed Method, The Principle of Least Surprise, Can You See The Flow of the Code?, Encapsulation</td>
</tr>
<tr>
<td>Is it easy to change the code?</td>
<td>Don't Repeat Yourself, Wormhole Anti-Pattern, Open Closed Principle</td>
</tr>
<tr>
<td>Can I quickly verify my changes in isolation?</td>
<td>Loose Coupling, High Cohesion, Testability</td>
</tr>
<tr>
<td>Can I make the change with a low risk of breaking existing features?</td>
<td>Loose Coupling, High Cohesion, Open Closed Principle, Testability</td>
</tr>
<tr>
<td>Will I know if and why&nbsp;something is broken?</td>
<td>Fail Fast</td>
</tr>
</tbody>
</table>

It was in this table that I saw a notable "flaw" that inspired me to start writing this particular blog post. The "flaw" being that **there are no links to the referenced topics**. Granted, there is probably much value in reading through the blog series as it is laid-out, but one of my favorite ways to learn is to reorganize the subject matter in a way that makes more sense to me, so here we go. (I will be adding links to the above table so as to avoid duplication).

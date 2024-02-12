# pressEnterRepo

<!-- Project information -->

In this project I have worked on replicating this Figma design;

https://www.figma.com/file/5daB21Co5DjlcbL7htvdHv/Junior-Dev-Test?type=design&node-id=0-1&mode=design&t=UUpQV3NlJXyF58QL-0.

The purpose of this project was to showcase my skills into developing a responsive web page from this design. I have shifted between the design itself and also the main website which is
https://pressenter.group/, in order to understand the responsiveness, so that I can develop my version as close as possible, and potentially slightly improved.

Below you will be able to find the direct link to the project and the repository as well;

Repository link: https://github.com/alphaura/pressEnterRepo
Project link: https://alphaura.github.io/pressEnterRepo/

## Table of Content

- [Responsiveness](#responsiveness)
- [Menu Section](#menu-section)
  - [Mobile](#mobile)
  - [Desktop](#desktop)
- [Hero Section](#hero-section)
- [Values Section](#values-section)
- [Main Project](#main-project)
- [Other sections](#other-sections)
  - [Stats Section](#stats-section)
  - [Brands Section](#brands-section)
  - [Lifestyle Section](#lifestyle-section)
  - [Contact Section](#contact-section)
  - [Footer Section](#footer-section)

## Responsiveness

Responsiveness is one of my main focuses whilst I'm building projects. In order to understand the responsiveness for this project, I used the main website (https://pressenter.group/) to get
an idea at what device size where the breakpoints. After that was understood, I started working on developing section by section on mobile and then make it responsive to larger device widths
so that it is displayed properly on all devices, mobile, tablet and desktop.

I'm a big fan of using Flexbox and also Grid so I interchangeably work with both, and use them as needed.

## Menu Section

### Mobile

Doing a functional hamburger menu was one of the checkboxes for this project, so I've worked my way around on making the button styling purely with CSS and to then function on-click with
javaScript. I made the logo to always be present so that the name of the company is always in front of the user. The last checkbox for the menu was to make it sticky which was also done, making
it easier for the user to access the menu at all times.

### Desktop

On desktop the menu is the standard menu design, having the logo on the left side and the menu list on the right side. Both mobile and desktop menus are fully functional and linked to the
main website pages, in order to present a more accurate looking and functional webpage.

## Hero Section

The hero section has two main checkboxes. The first one was to make a carousel using the owl-carousel-library which replaces the main video on the site, has both manual and automatic transitions,
is fully responsive and has content overlapped, which all of this has been accomplished.

After learning about owl-carousel and understanding how to implement it, I have swiftly added the needed code in order to make this work. I have then created the overlapping content, which in
this case were 3 cards showcasing some strengths about the company “Organisation, Expertise, Culture". I have used CSS positioning for this to overlap the carousel and flexbox in order to adapt the layout depending on the device size.

The second checkbox was to make the inside images of the 3 cards have a zoom in like effect when hovered on, which has been done. This zoom effect is targeted only for the images and
not the actual container.

## Values Section

This section has the last checkbox as part of the main task, which was to make a pop-up trigger upon the "Learn More" button being clicked. For this, I used javaScript and made a pop-up
that pulls the current date and time from the user's device.

As an added feature to the section, I have made the value cards zoom-in on hover to give more importance to them, and also made it slide-up when the section is visible in viewport.

## Main Project

The above is the main part for this project, however, I wanted to continue and complete the full webpage, in order to test myself and showcase my knowledge further, as well as having a complete
project.

## Other Sections

### Stats Section

For the stats section, I have used the same colors used on the main site including their transparency and also responsive design, using grid shifting from 2 columns to 4 columns depending on the
device size.

### Brands Section

Here as well I have done the slide-up feature on the brands, targeting each individual brand rather than the whole container itself, to create a better and modern experience. All brand cards
are clickable and will direct you to their main pages. For the responsive layout, I have used Grid this time to have 2 columns visible on mobile and 3 on tablet and desktop.

### Lifestyle Section

In this section I used the images provided in the Figma design but implemented the hover effect present on the main site, which makes the images move slightly up when hovered on, creating more
interactivity to a simple section. Same as well here, I used Grid to have 2 columns visible on mobile and 3 on tablet and desktop.

### Contact Section

For the background I've used a bit photoshop in order to play with the design and used flexbox to have the contact us button move to the right on bigger screen devices. For the light line-break I used the top-border of the class "bottom-section", and added some padding for added separation.

### Footer Section

The footer section is purely based on the Figma design, having the layout responsive by utilising flexbox to shift from columns to rows whilst having even space between. All links present
in the footer are also clickable which redirects the user to the according sections on the site.

For the last part which is the licensing part, I have placed this outside of the main container of the footer, so that the top border styling is not affected by the padding set to the footer's container.

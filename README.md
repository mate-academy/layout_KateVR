# KateVR landing page
Implement landing page according to [Figma design](https://www.figma.com/file/hhtGde1r4hMr5wghrKm6vl/KatVR?node-id=159%3A0) - Use BEM and SCSS

- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)


## HR important moments
- The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
- Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
- Make sure everything looks neat on mobile and without horizontal scrolling
- Add favicon
- Add a smooth scroll for the whole page
- When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
- The video should work. If it is not working, it can confuse the recruiter/user, because then it is not clear why it is on the landing page.
- The Next button is active and clickable and leads to the next block
- “Buy now” buttons are active and clickable and lead to the contact form
- The form shouldn’t submit empty
- The form should not accept incorrect data in a field with a phone number (for example, a number with a letter and there was no error), it is better to validate the input so that the form is sent only when all fields are filled incorrectly

## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
5. Open one more terminal window for the next steps.
6. `git checkout -b develop` - to create new branch and switch on it.
7. Write you code in `src` folder.
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`.
10. `git add . && git commit -m 'solution'` to save your changes.
11. `git push origin develop` - to send you code for PR.
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://<your_account>.github.io/KateVRLanding/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.

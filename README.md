# KateVR landing page
Implement landing page according to [Figma design](https://www.figma.com/file/hhtGde1r4hMr5wghrKm6vl/KatVR?node-id=159%3A0) - Use BEM and SCSS

- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)


## HR important moments
- Скорость анимаций на всем лендинге одинаковая (например увеличение при наведении или выезд блоков при скроле)
- Placeholder в формах подсказывают что именно ввести, а если стоит валидация формы, то понятно в каком формате вводить номер телефона
- Убедитесь, что с мобильных выглядит все аккуратно и без горизонтальной прокрутки
- Добавьте favicon
- Добавьте мягкий скролл при клике на меню до соответствующих блоков страницы
- Видео в лендинге должно работать. Если оно будет нерабочее, это может смутить рекрутера/пользователя, так как тогда совсем не понятно зачем оно в лендинге.
- Кнопка Next активна и кликабельна и ведет на следующий блок 
- Кнопки Buy now активны и кликабельны и ведут на контактную форму 
- Форма не должна отправляться пустой
- Форма не должна принимать некорректные данные в поле с номером телефона (например, номер с буквой и не было никакой ошибки), лучше предусмотреть так, чтобы форма отправлялась только тогда, когда все поля заполнены корректно


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
  [DEMO LINK](https://VladSaen.github.io//layout_KateVR/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.

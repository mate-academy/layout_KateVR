import classNames from 'classnames'
import React from 'react'

function LanguageContent() {
  const languages = [
    { id: 'ua', name: 'Ukrainian' },
    { id: 'en', name: 'English', default: true },
    { id: 'ru', name: 'Russian' },
  ]

  return (
    <ul className="text-white text-2xl flex flex-col items-center pt-[20%] gap-10 w-full h-full">
      {languages.map(({ id, name, default: isDefault }) => (
        <li
          key={id}
          className={classNames('text-lg text-center', {
            'text-primary bg-secondary w-full py-2': isDefault,
          })}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export default LanguageContent

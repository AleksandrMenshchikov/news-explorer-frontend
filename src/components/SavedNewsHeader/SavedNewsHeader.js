import React from 'react'
import './SavedNewsHeader.css'

const SavedNewsHeader = () => {
  return (
    <section className="SavedNewsHeader">
      <div className="SavedNewsHeader__container">
        <h4 className="SavedNewsHeader__title">Сохранённые статьи</h4>
        <p className="SavedNewsHeader__message">
          User, у вас 5 сохранённых статей
        </p>
        <p className="SavedNewsHeader__keywords">
          По ключевым словам: Природа, Тайга и 2-м другим
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader

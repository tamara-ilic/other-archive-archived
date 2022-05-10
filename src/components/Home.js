import { useRef, useEffect } from 'react'
import { useAllPrismicDocumentsByType, PrismicRichText } from '@prismicio/react'
import MiniMasonry from 'minimasonry'

import Card from './Card'

export default function Home() {
    const [projects, { state, error }] = useAllPrismicDocumentsByType('project')
    console.log('projects:', projects)
    const grid = useRef();

    useEffect(() => {
        if (grid.current) {
        var masonry = new MiniMasonry({
            baseWidth: 150,
            container: document.querySelector('.grid'),
            minify: false,
            surroundingGutter: false,
            gutter: 24
        })
        }
    })

    const cards = projects?.map((item) => {

        function showInfo(event, id) {
          console.log('showInfo event:', event);
          if (id === item.id) {
            console.log('I should show detailed info for', id);
            console.log('description:', item.data.description);
            return (
              <PrismicRichText
                field={item.data.description}
                fallback={<p>No content</p>}
                className='card--description'
              />
            )
          }
        }
    
        return (
          <Card
            key={item.id}
            id={item.id}
            showInfo={showInfo}
            img={item.data.main_image.url}
            imgAlt={item.data.main_image.alt}
            title={item.data.title[0].text}
            date={item.data.date}
            shop={item.data.shop}
          />
        )
      })

  return (
    <>
      <h1>I am the home page.</h1>
      <div ref={grid} className='grid'>
        {cards}
      </div>
    </>
  )
}

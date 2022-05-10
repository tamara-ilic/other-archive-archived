import { useAllPrismicDocumentsByType, PrismicRichText } from '@prismicio/react'
import { useRef, useEffect } from 'react'
import MiniMasonry from 'minimasonry'
import Card from './Card'

export default function Cards() {
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

    function showInfo(event, id) {
      console.log(event, id)
      if (id === this.id) {
        console.log('I should show detailed info for', id)
        console.log(this.description)
      }
    }

    return (
      <div ref={grid} className='grid'>
        {projects && projects.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            showInfo={showInfo}
            shop={item.data.shop}
            img={item.data.main_image.url}
            imgAlt={item.data.main_image.alt}
            title={item.data.title[0].text}
            date={item.data.date}
            description={item.data.description}
          />
        ))}
      </div>
    )
}
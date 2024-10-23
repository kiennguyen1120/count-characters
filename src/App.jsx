import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Textarea } from './components/ui/textarea'

const App = () => {
  const [text, setText] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [paragraphCount, setParagraphCount] = useState(0)
  const [spaceCount, setSpaceCount] = useState(0)

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(word => word !== '')
    const paragraphs = text.split(/\n+/).filter(para => para.trim() !== '')
    const spaces = text.split('').filter(char => char === ' ')

    setCharCount(text.length)
    setWordCount(words.length)
    setParagraphCount(paragraphs.length)
    setSpaceCount(spaces.length)
  }, [text])

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Text Analysis Tool</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Type text here..."
          value={text}
          onChange={handleTextChange}
          className="w-full h-48 mb-4 p-2 border rounded"
        />
        <div className="text-center items-center justify-center">
          <div className="items-center justify-center">
            <p className="text-lg font-semibold">Characters</p>
            <p className="text-2xl text-primary">{charCount}</p>
          </div>
          <div className="">
            <p className="text-lg font-semibold">Words</p>
            <p className="text-2xl text-primary">{wordCount}</p>
          </div>
          <div className="">
            <p className="text-lg font-semibold">Paragraphs</p>
            <p className="text-2xl text-primary">{paragraphCount}</p>
          </div>
          <div className="">
            <p className="text-lg font-semibold">Spaces</p>
            <p className="text-2xl text-primary">{spaceCount}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default App
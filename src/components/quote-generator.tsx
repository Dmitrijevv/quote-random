"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { RefreshCw, Quote } from "lucide-react"

interface QuoteData {
  quote: string
  author: string
  category?: string
}
const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<QuoteData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRandomQuote = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": `${NEXT_PUBLIC_API_KEY}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch quote: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      // API returns an array of quotes, we take the first one
      if (Array.isArray(data) && data.length > 0) {
        const quoteData = data[0]
        setQuote({
          quote: quoteData.quote,
          author: quoteData.author,
          category: quoteData.category,
        })
      } else {
        throw new Error("Received invalid data format from API")
      }
    } catch (err) {
      setError("Failed to fetch a quote. Please try again.")
      console.error("Quote fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomQuote()
  }, [])
  if(NEXT_PUBLIC_API_KEY === undefined) return <div>Loading...</div>
  return (
    <Card className="w-full max-w-md shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <Quote className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">Random Quote</h2>
        </div>
      </CardHeader>

      <CardContent className="pt-4 pb-2">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="space-y-4">
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg">{quote?.quote}</blockquote>
            <p className="text-right font-semibold">— {quote?.author}</p>
            {quote?.category && <p className="text-right text-sm text-muted-foreground">Category: {quote.category}</p>}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2">
        <Button onClick={fetchRandomQuote} disabled={loading} className="w-full">
          {loading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
          New Quote
        </Button>
      </CardFooter>
    </Card>
  )
}


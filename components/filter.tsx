"use client"

import { useState } from "react"
import type { Product } from "../types/types";

type Props = {
   products: Product[]
}

export default function filter({ products=[] }: Props) {
  

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);


 return (

    <>
      <input type="checkbox" id="descpription" name="descpription" value="descpription"/>
      <label for="descpription"> I have a bike</label><br>
    </>
 )

}

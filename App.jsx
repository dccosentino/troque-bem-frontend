<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// Troque Bem Frontend - React + TailwindCSS</p>
<p class="p2"><br></p>
<p class="p1">import { useState } from 'react';</p>
<p class="p2"><br></p>
<p class="p1">export default function Home() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [numberA, setNumberA] = useState('');</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [numberB, setNumberB] = useState('');</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [result, setResult] = useState(null);</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [history, setHistory] = useState([]);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>const fetchCard = async (number) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/card?number=${number}`);</p>
<p class="p1"><span class="Apple-converted-space">    </span>return await res.json();</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>const handleCompare = async () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const cardA = await fetchCard(numberA);</p>
<p class="p1"><span class="Apple-converted-space">    </span>const cardB = await fetchCard(numberB);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const fairTrade = parseFloat(cardA.averagePrice) &lt;= parseFloat(cardB.averagePrice);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const comparison = { cardA, cardB, fairTrade };</p>
<p class="p1"><span class="Apple-converted-space">    </span>setResult(comparison);</p>
<p class="p1"><span class="Apple-converted-space">    </span>setHistory([comparison, ...history]);</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>return (</p>
<p class="p1"><span class="Apple-converted-space">    </span>&lt;div className="max-w-5xl mx-auto p-4 space-y-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;h1 className="text-3xl font-bold text-center text-red-700"&gt;Troque Bem&lt;/h1&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;p className="text-center"&gt;Compare cartas Pokémon usando os preços da LigaPokemon.com.br.&lt;/p&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;div className="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">          </span>className="border p-2 rounded"</p>
<p class="p1"><span class="Apple-converted-space">          </span>placeholder="Número da Carta A"</p>
<p class="p1"><span class="Apple-converted-space">          </span>value={numberA}</p>
<p class="p1"><span class="Apple-converted-space">          </span>onChange={(e) =&gt; setNumberA(e.target.value)}</p>
<p class="p1"><span class="Apple-converted-space">        </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">          </span>className="border p-2 rounded"</p>
<p class="p1"><span class="Apple-converted-space">          </span>placeholder="Número da Carta B"</p>
<p class="p1"><span class="Apple-converted-space">          </span>value={numberB}</p>
<p class="p1"><span class="Apple-converted-space">          </span>onChange={(e) =&gt; setNumberB(e.target.value)}</p>
<p class="p1"><span class="Apple-converted-space">        </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;button</p>
<p class="p1"><span class="Apple-converted-space">        </span>onClick={handleCompare}</p>
<p class="p1"><span class="Apple-converted-space">        </span>className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"</p>
<p class="p1"><span class="Apple-converted-space">      </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>Comparar</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;/button&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>{result &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;div className="bg-white rounded shadow p-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;h2 className="text-xl font-semibold mb-4"&gt;Resultado da Troca&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div className="grid grid-cols-2 gap-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>{[result.cardA, result.cardB].map((card, idx) =&gt; (</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div key={idx} className="border p-2 rounded"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;img src={card.image} alt={card.name} className="w-full" /&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;p className="font-semibold"&gt;{card.name}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;p&gt;Preço Mínimo: R$ {card.lowestPrice}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;p&gt;Preço Médio: R$ {card.averagePrice}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;p&gt;Preço Máximo: R$ {card.highestPrice}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;a href={card.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"&gt;Ver na LigaPokemon&lt;/a&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>))}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;p className="mt-4 font-bold"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>{result.fairTrade ? 'A troca é justa ou vantajosa.' : 'A troca NÃO é vantajosa.'}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>)}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>{history.length &gt; 0 &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;div className="mt-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;h3 className="font-bold mb-2"&gt;Histórico de Comparações&lt;/h3&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;ul className="space-y-2"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>{history.map((h, idx) =&gt; (</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;li key={idx} className="border p-2 rounded"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>{h.cardA.name} (R$ {h.cardA.averagePrice}) vs {h.cardB.name} (R$ {h.cardB.averagePrice}) —<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;strong&gt;{h.fairTrade ? 'Troca OK' : 'Troca ruim'}&lt;/strong&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/li&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>))}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/ul&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>)}</p>
<p class="p1"><span class="Apple-converted-space">    </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p1">}</p>
</body>
</html>

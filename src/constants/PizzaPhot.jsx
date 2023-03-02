import React from 'react'

function PizzaPhot() {
        const [posts, setPosts] = useState([]);
        const [isLoading, setLoading] = useState(true);
      
      
        useEffect(() => {
          fetch('https://63e4e6f44474903105f47899.mockapi.io/posts')
            .finally(() => setLoading(false))
            .then((res) => res.json())
            .then((data) => setPosts(data))
        }, [])
      
  return (
    asd
  )
}

export default PizzaPhot
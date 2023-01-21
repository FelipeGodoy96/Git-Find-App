import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react"
import "./styles.css"
import background from "../../assets/background.png"
import placeholder from "../../assets/placeholder.png"
import { ListItem } from "../../components/itemList"

export default function App () {

    const [data, setData] = useState(null)
    const [search, setSearch] = useState('')
    const [repos, setRepos] = useState(null)

    const handleFetchData = async () => {
        const req = await fetch(`https://api.github.com/users/${search}`)
        const res = await req.json()

        console.log(res)
    }

    return (
        <div className="App">
            <Header />
            <div className="content">
                <img className="background" src={background} alt=""/>
                <div className="info">
                    <div>
                       <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="@username" />
                       <Button onClick={handleFetchData()} text="Buscar" />
                    </div>
                    <div className="profile">
                        <img className="avatar" src={data?.avatar ? data.avatar : placeholder} alt="" />
                        <div>
                            <h3>{data?.name ? data.name : ''}</h3>
                            <span>{data?.username ? data.username : ''}</span>
                            <p>{data?.description ? data.description : ''}</p>
                        </div>
                    </div>
                    <hr />
                    <section className="dynamicData">
                        <h4 className="repo">Repositórios</h4>
                        {/* {repos.map((item, index) => (
                            <ListItem key={index} title={item.algo} description={item.algo2}
                        ))} */}
                        
                    </section>
                </div>
            </div>
        </div>
    )
}
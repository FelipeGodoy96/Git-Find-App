import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react"
import { Octokit } from "octokit"
import "./styles.css"
import background from "../../assets/background.png"
import placeholder from "../../assets/placeholder.png"
import { ListItem } from "../../components/itemList"

export default function App () {

    const [data, setData] = useState('')
    const [search, setSearch] = useState('')
    const [repos, setRepos] = useState([])

    const handleFetchData = async () => {
        const octokit = new Octokit({})
        try {
            const res = await octokit.request(`GET /users/${search}`)
            setData(res.data)
            const repoRes = await octokit.request(`GET /users/${search}/repos`)
            console.log(repoRes)
            setRepos(repoRes.data)
        } catch (error) {
            console.error(error)
            //Todo: trigger shake input and button with error message
        }
    }

    return (
        <div className="App">
            <Header />
            <div className="content">
                <img className="background" src={background} alt=""/>
                <div className="info">
                    <div>
                       <Input onChange={(event) => setSearch(event.target.value)} placeholder="@username" />
                       <Button onClick={handleFetchData} text="Buscar" />
                    </div>
                    <div className="profile">
                        <img className="avatar" src={data?.avatar_url ? data.avatar_url : placeholder} alt="" />
                        <div className="userInfo">
                            <h3>{data.name ? data.name : ''}</h3>
                            <span>{data.login ? data.login : ''}</span>
                            <p>{data.bio ? data.bio : ''}</p>
                        </div>
                    </div>
                    <hr />
                    <section className="dynamicData">
                        <h4 className="repo">Repositórios</h4>
                        {repos && repos.map((item, index) => (
                            <ListItem key={index} title={item.name} description={item.description} htmlUrl={item.html_url}/>
                        ))}
                        
                    </section>
                </div>
            </div>
        </div>
    )
}

export default async function Repo() {

  await new Promise((resolve) =>setTimeout(resolve, 2000))


    const response = await fetch("https://api.github.com/users/karenyov/repos", {
      cache: 'no-cache' 
    });
    const repos = await response.json();
  
    return (
      <div>
        <h1>Repos</h1>
        <pre>{JSON.stringify(repos, null, 2)}</pre>
      </div>
    )
  }
  
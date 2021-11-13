export default function PokeStats ({stats}) {
    return (
        <>
            {stats?.map(({stat, base_stat}, index)=>(
                <div key={index} className="stats-container" style={{display: "flex"}} >
                    <p>
                        {stat.name}
                        {`: ${base_stat}%`}
                    </p>
                </div>
            ))}
        </>
    )
}
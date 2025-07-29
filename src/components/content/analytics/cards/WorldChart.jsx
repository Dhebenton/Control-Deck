import Card from "../../../global-components/card/Card";
import Map from "../components/Map";
import { mapData } from "../../../data/mapData";

function WorldChart({}) {
    return (
        <Card style={'p24 g36 f-col'}>
            <p className="card-heading f14">Traffic By Country</p>
            <div className="f-row g36">
                <div className="flex7">
                    <Map />
                </div>
                <div className="flex6 f-col">
                    <table className="flex country-chart">
                    <tbody>
                        <tr>
                        <th>Country</th>
                        <th>Percentage</th>
                        <th>Change</th>
                        </tr>
                        {mapData
                        .sort((a, b) => b.percentage - a.percentage)
                        .map(({ country, flagCode, percentage, delta }) => (
                            <tr key={country}>
                            <td className="f-row g12">
                                <img
                                src={`https://kapowaz.github.io/circle-flags/flags/${flagCode}.svg`}
                                alt={country}
                                />
                                <p className="table-chart-label">{country}</p>
                            </td>
                            <td>
                                <div className="f-row g12">
                                <p className="table-chart-label">{percentage}%</p>
                                <div className="table-progress-bar">
                                    <div style={{ width: `${percentage}%` }}></div>
                                </div>
                                </div>
                            </td>
                            <td className={delta >= 0 ? 'change-from-last' : 'change-from-last neg'}>
                                {delta >= 0 ? `+${delta}%` : `${delta}%`}
                            </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>

                </div>
            </div>
        </Card>
    )
}

export default WorldChart
import { config } from "../config/config.env";
import { Coordinate } from "../coordinate/coordinate.entity";
import { template } from "../notification/mail/mail.template"

const frontendUrl = config.frontendUrl;

export const reminderNotificationTemplate = (point: {lat: number, lon: number}, passDate: Date): string => {
    const url = `${frontendUrl}/view-coordinate?lat=${point.lat}&lon=${point.lon}`;
    return template( `<h2> Landsat pass reminder. </h2> 
        <p> Landsat pass was scheduled for ${passDate.toDateString()}. <br/>
        Landsat already passed over there. <a href="${url}"> Scene data is ready to look up here </a> </p>
        `, "", "");
}
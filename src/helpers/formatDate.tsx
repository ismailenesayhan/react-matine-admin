import Moment from "moment";

export function formatDate( date:string ) {
    Moment.locale("tr_TR");
    return Moment(date).format("DD.MM.YYYY");
}

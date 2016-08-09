/**
 * Created by janeluck on 8/9/16.
 */
function errorHandler(e) {
    console.dir(e);
    var msg;
    if (e.target && e.target.error)
        e = e.target.error;
    if (e.message)
        msg = e.message;
    else if (e.name)
        msg = e.name;
    else if (e.code)
        msg = "Code " + e.code;
    else
        msg = e.toString();
    showMessage('Error: ' + msg);
}
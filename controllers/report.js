let report = {};

report.get = (req, res) => {
    //select report from database, prepare JSON and send
    res.send('This is GET');
};

report.post = (req, res) => {
    res.send('This is POST');
};

module.exports = report;
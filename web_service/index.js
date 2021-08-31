const express = require("express");
const router = express.Router();
const fsm = require("./../fsm");

// URL: /:ticker/:from/:to
router.get("/custom/:ticker/:fromDate/:toDate", (req, res) => {
    const { ticker, fromDate, toDate } = req.params;
    if (fromDate.length === 10 && toDate.length === 10) {
        return res.json({
            status: true,
            message: "Successfull",
            data: fsm.customInterval(ticker,fromDate,toDate)
        });
    } else {
        return res.json({
            status: false,
            message: "Date invalid"
        })
    }
})

// URL: /:ticker/:interval
router.get("/general/:ticker/:interval", (req, res) => {
    const { ticker, interval } = req.params;
    return res.json({
        status: true,
        message: "Successfull",
        data: fsm.commonInterval(ticker,interval)
    });
})

module.exports = router;
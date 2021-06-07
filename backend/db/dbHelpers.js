const { Deposit, Expense, User } = require('./db');

getDeposits = async (req, res) => {
  await Deposit.find({}, (err, deposits) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!deposits.length) {
          return res
              .status(404)
              .json({ success: false, error: `Movie not found` })
      }
      return res.status(200).json({ success: true, data: deposits })
  }).catch(err => console.log(err))
}

module.exports = { getDeposits };
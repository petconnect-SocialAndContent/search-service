const client = require('../services/elasticClient');

exports.search = async (req, res) => {
  try {
    const { query } = req.query;

    const result = await client.search({
      index: 'petconnect',
      query: {
        multi_match: {
          query,
          fields: ['name', 'description', 'tags']
        }
      }
    });

    res.json(result.hits.hits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.indexTestData = async (req, res) => {
  try {
    const { body } = req;
    const response = await client.index({
      index: 'petconnect',
      document: body,
    });
    res.json({ indexed: true, response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

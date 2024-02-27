from flask import Flask, jsonify
from webscraper import webscraper

app = Flask(__name__)

@app.route('/api/scrape', methods=['GET'])
def scrape():
    data = webscraper()  # Call your scraping function
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

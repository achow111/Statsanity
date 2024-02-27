import requests
from bs4 import BeautifulSoup
import pandas as pd

def webscraper():
       # Send a GET request to the URL
    url = "https://www.basketball-reference.com/friv/mvp.html"
    response = requests.get(url)

    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the table containing the data
    table = soup.find('table', {'id': 'players'})

    # Extract column headers
    headers = [th.text.strip() for th in table.find('thead').find_all('th')[1:]]

    # Extract data from the table rows
    data = []
    for row in table.find('tbody').find_all('tr'):
        row_data = [td.text.strip() for td in row.find_all('td')]
        data.append(row_data)

    # Create a DataFrame
    df = pd.DataFrame(data, columns=headers)

    # Convert DataFrame to dictionary
    data_dict = df.to_dict(orient='records')

    return data_dict
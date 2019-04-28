
# Import the dependencies
import pandas as pd
import numpy as np
from pprint import pprint
from splinter import Browser
import re
from bs4 import BeautifulSoup
import requests as r

def scrape():
  
    news_url = "https://mars.nasa.gov/news/"

    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless=False)

 
    browser.visit(news_url)


    soup = bs(browser.html, "html.parser")


    # Loop through the page to find all the titles and articles
    news_title = soup.find('div', class_='content_title').text.strip()
    news_summaries = soup.find('div', class_='article_teaser_body').text.strip()

    print(news_title)
    print(news_summaries)

 
    jpl_base_url = "https://www.jpl.nasa.gov/"
    url_space = "spaceimages/?search=&category=Mars" 

   
    jpl_url = f"{jpl_base_url}{url_search}"
    browser.visit(jpl_url)

  
    soup = bs(browser.html, "html.parser")

  

    print(featured_image_url)

    twitter_url = "https://twitter.com/marswxreport?lang=en"

   
    browser.visit(twitter_url)

   
    soup = bs(browser.html, "html.parser")



    twitter_weather = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text.strip()

    print(twitter_weather)

  
    table_facts = 'https://space-facts.com/mars/'
    table = pd.read_html(table_facts)

    print(table)

    
    table_facts_df = table[0]


    
    table_facts_df.columns = ["Parameter", "Values"]
    table_facts_df.set_index(["Parameter"])

    table_factss_html = table_facts_df.to_html()
    

    table_factss_html = table_factss_html.replace("\n", "")

    print(table_factss_html)
    
    hem_url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'

    hem_base = "https://astrogeology.usgs.gov"

    browser.visit(hem_url)

    
    soup = bs(browser.html, "html.parser")

    
    hem_img_urls = []

    
    hem_results = soup.find_all('div', class_='description')
    
    for result in hem_results:
   title = result.find('h3').text.strip()
    img_url = result.find('a')['href']
    img_complete_url = hem_url + img_url
    browser.visit(img_complete_url)    
    soup = bs(browser.html, "html.parser")
    img_down = soup.find('div', class_='downloads')
    complete_img_url = img_down.find('a')['href']
    hem_img_urls.append({"title" : title, "urls": complete_img_url})


    
    pprint(hem_img_urls)


   
    mars_d = {
        "news_title": news_title,
        "news_summaries": news_summaries,
        "twitter_weather": twitter_weather,
        "table_factss_html": table_factss_html,
        "hem_img_urls": hem_img_urls
    }

    return mars_d
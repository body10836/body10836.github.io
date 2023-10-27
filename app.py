# import necessary libraries 
from flask import Flask, request, render_template 
import wikipedia
import random 

app = Flask(__name__) 

# create HOME View 
@app.route("/", methods=["POST", "GET"]) 

def home(): 
	if request.method == "GET": 
		return render_template("index.html") 
	else: 
		search = request.form["options"] 
		wiki = wikipedia.search(search)
		
		page = wikipedia.page(wiki[3])
		title= page.title
		catagories = page.categories
		content = page.content
		links = page.links
		references = page.references
		summary = page.summary
		# summary
        
		# get the categories of the page
        
		sentence = random.randint(4,len(summary))
        
		# Fetch data from wikipedia 
        
		result = wikipedia.summary(page, sentences=sentence) 
		
		return f"<h1>{result}</h1>" 


if __name__ == '__main__': 
	app.run(debug=True) 

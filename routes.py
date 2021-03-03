#importando framework e metodo
from flask import Flask, render_template

app = Flask(__name__)
#rota GET 
@app.route("/calcular")
def index():
  #retorna nossa pagina 
  return render_template('default.html')

if __name__ == "__main__":
 app.run(debug=True)
import matplotlib.pyplot as plt
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure

from flask import Flask, render_template, Response
from io import BytesIO
import base64
import numpy as np

app = Flask(__name__)


@app.route('/plot')
def plot():

    fig, ax = plt.subplots(figsize=(6, 3), subplot_kw=dict(aspect="equal"))

    recipe = ["100 Easy",
              "200 Intermididate",
              "300 Advanced",
              "700 Unsolved"]

    data = [float(x.split()[0]) for x in recipe]
    ingredients = [x.split()[-1] for x in recipe]

    def func(pct, allvals):
        absolute = int(np.round(pct/100.*np.sum(allvals)))
        return "{:.1f}%\n({:d} Questions)".format(pct, absolute)

    wedges, texts, autotexts = ax.pie(data, autopct=lambda pct: func(pct, data),
                                      textprops=dict(color="w"))

    ax.legend(wedges, ingredients,
              title="Question stats",
              loc="center left",
              bbox_to_anchor=(1, 0, 0.5, 1))

    plt.setp(autotexts, size=8, weight="bold")

    ax.set_title("Performance")

    img = BytesIO()
    plt.savefig(img, format='png')
    FigureCanvas(fig).print_png(img)

    return Response(img.getvalue(), mimetype="image/png")


if __name__ == '__main__':
    app.run()

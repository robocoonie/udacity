import turtle

def draw_square(some_turtle):
    for i in range(1,5):
        some_turtle.forward(100)
        some_turtle.right(90)

def draw_art():
    window = turtle.Screen()
    window.bgcolor("red")
    
    brad = turtle.Turtle()
    brad.shape("turtle")
    brad.color("yellow")
    brad.speed(8)
    for i in range(1,37):
        draw_square(brad)
        brad.right(10)
    #draw_circle()
    #draw_triangle()

    window.exitonclick()

def draw_circle():
    angie = turtle.Turtle()
    angie.shape("arrow")
    angie.color("blue")
    angie.circle(100)

def draw_triangle():
    chris = turtle.Turtle()
    chris.shape("turtle")
    chris.color("white")

draw_art()


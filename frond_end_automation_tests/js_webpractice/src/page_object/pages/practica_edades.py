from js_webpractice.src.page_object.practica_edades_locators import Locators
from selenium.webdriver.common.by import By
import random
from time import sleep


class PracticaEdades(object):
    def __init__(self, driver):
        self.driver = driver

    def agregar_cantidad_integrtantes(self, cantidad_integrantes):
        self.driver.find_element(
            By.ID,
            Locators.input_cantidad_integrantes
        ).clear()

        self.driver.find_element(
            By.ID,
            Locators.input_cantidad_integrantes
        ).send_keys(cantidad_integrantes)

        self.driver.find_element(
            By.ID,
            Locators.boton_siguiente_paso
        ).click()

    def ingresar_edades(self):
        inputs_edades = self.driver.find_elements(
            By.CLASS_NAME,
            Locators.input_edad_integrante
        )

        print(f"Lista de iputs de edades: ${len(inputs_edades)}")

        for input_edad in inputs_edades:
            input_edad.clear()
            input_edad.send_keys(random.randint(1, 120))

        self.driver.find_element(
            By.ID,
            Locators.boton_calcular_edades
        ).click()

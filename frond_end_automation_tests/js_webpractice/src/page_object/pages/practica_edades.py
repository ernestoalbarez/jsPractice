from js_webpractice.src.page_object.practica_edades_locators import Locators


class PracticaEdades(object):
    def __init__(self, driver):
        self.driver = driver

    def agregar_cantidad_integrantes(self, cantidad_integrantes):
        self.driver.find_element(
            "id",
            Locators.input_cantidad_integrantes
        ).send_keys(cantidad_integrantes)

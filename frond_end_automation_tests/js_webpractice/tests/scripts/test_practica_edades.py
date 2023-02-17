from js_webpractice.src.test_base.web_driver_setup import WebDriverSetup
from js_webpractice.src.page_object.pages.practica_edades import PracticaEdades
from js_webpractice.src.page_object.practica_edades_locators import Locators
import unittest


class TestPracticaEdades(WebDriverSetup):
    def test_ingresar_cantidad_de_usuarios(self):
        driver = self.driver
        self.driver.get(Locators.app_url)
        self.driver.set_page_load_timeout(30)

        practica_edades = PracticaEdades(driver)

        practica_edades.agregar_cantidad_integrantes(5)

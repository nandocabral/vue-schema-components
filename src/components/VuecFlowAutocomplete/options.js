export default {
  width: "100%",
  theme: "bootstrap",
  placeholder: "Selecciona una opción ...",
  allowClear: false,
  multiple: false,
  minimumInputLength: 0,
  maximumInputLength: 0,
  maximumSelectionLength: 0,
  minimumResultsForSearch: 0,
  tags: false,
  tokenSeparators: [],
  language: {
    errorLoading: function() {
      return "No se pudieron cargar los resultados";
    },
    inputTooLong: function(e) {
      var n = e.input.length - e.maximum,
        r = "Por favor, elimine " + n + " car";
      return (r += 1 == n ? "ácter" : "acteres");
    },
    inputTooShort: function(e) {
      var n = e.minimum - e.input.length,
        r = "Por favor, introduzca " + n + " car";
      return (r += 1 == n ? "ácter" : "acteres");
    },
    loadingMore: function() {
      return "Cargando más resultados…";
    },
    maximumSelected: function(e) {
      var n = "Sólo puede seleccionar " + e.maximum + " elemento";
      return 1 != e.maximum && (n += "s"), n;
    },
    noResults: function() {
      return "No se encontraron resultados";
    },
    searching: function() {
      return "Buscando…";
    },
    removeAllItems: function() {
      return "Eliminar todos los elementos";
    }
  }
};

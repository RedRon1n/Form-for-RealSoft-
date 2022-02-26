
(function() {
    $(function() {
      var collapseMyMenu, expandMyMenu, hideMenuTexts, showMenuTexts;
      expandMyMenu = function() {
        return $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
      };
      collapseMyMenu = function() {
        return $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
      };
      showMenuTexts = function() {
        return $("nav.sidebar ul a span.expanded-element").show();
      };
      hideMenuTexts = function() {
        return $("nav.sidebar ul a span.expanded-element").hide();
      };
      return $("#justify-icon").click(function(e) {
        if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-collapsed")) {
          expandMyMenu();
          showMenuTexts();
          $(this).css({
            color: "#000"
          });
        } else if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-expanded")) {
          collapseMyMenu();
          hideMenuTexts();
          $(this).css({
            color: "#FFF"
          });
        }
        return false;
      });
    });
  
  }).call(this);

  var ghostEditor = {
	bindEvents: function () {
		this.bindDesignModeToggle();
		this.bindToolbarButtons();
	},

	bindDesignModeToggle: function () {
		$("#page-content").on("click", function (e) {
			document.designMode = "on";
		});

		$("#page-content").on("click", function (e) {
			var $target = $(e.target);

			if ($target.is("#page-content")) {
				document.designMode = "off";
			}
		});
	},

	bindToolbarButtons: function () {
		$("#toolbar").on(
			"mousedown",
			".icon",
			function (e) {
				e.preventDefault();
				var btnId = $(e.target).attr("id");
				this.editStyle(btnId);
			}.bind(this)
		);
	},

	editStyle: function (btnId) {
		var value = null;

		if (btnId === "createLink") {
			if (this.isSelection()) value = prompt("Enter a link:");
		}

		document.execCommand(btnId, true, value);
	},

	isSelection: function () {
		var selection = window.getSelection();
		return selection.anchorOffset !== selection.focusOffset;
	},

	init: function () {
		this.bindEvents();
	}
};

ghostEditor.init();

function getContent() {
	var content = document.getElementById("page").innerHTML;
	alert(content);
}

const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    for (let value of data.values()) {
      document.querySelector('output').textContent = value;
    }
  }
  const form = document.querySelector('form');
  
  form.addEventListener('submit', onSubmit);
  
  const input = document.getElementById('currency')
  input.addEventListener('input', (e) => console.log(`input: ${e.target.value}`));
  input.addEventListener('keypress', (e) => console.log(`keypress: ${e.key}`));
  input.addEventListener('change', (e) => console.log(`change: ${e.target.value}`));



  

  



  
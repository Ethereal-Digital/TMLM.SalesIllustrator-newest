using Microsoft.AspNetCore.Mvc;

namespace TMLM.SalesIllustrator.Web.Controllers
{
    public class ErrorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

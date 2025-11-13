@Controller
public class RouteForwardingController {

    @RequestMapping(value = "/{path:^(?!api).*$}")
    public String forward() {
        return "forward:/index.html";
    }
}
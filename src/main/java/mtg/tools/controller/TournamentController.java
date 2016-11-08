package mtg.tools.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by t.gieselmann on 11/7/16.
 */

@Controller
public class TournamentController
{
    @RequestMapping("/")
    public String index()
    {
        
        return "tournaments";
    }

}

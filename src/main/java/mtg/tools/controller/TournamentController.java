package mtg.tools.controller;

import mtg.tools.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by t.gieselmann on 11/7/16.
 */

@Controller
@RequestMapping(path = "/")
public class TournamentController
{
    @Autowired
    private TournamentRepository tournament;

    @RequestMapping(method = RequestMethod.GET)
    public String index()
    {
        return "index";
    }

}

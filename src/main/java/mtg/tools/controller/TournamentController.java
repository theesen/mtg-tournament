package mtg.tools.controller;

import mtg.tools.domainobject.Tournament;
import mtg.tools.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by t.gieselmann on 11/7/16.
 */

@RestController
@RequestMapping(path = "/tournaments")
public class TournamentController
{
    @Autowired
    private TournamentRepository tournament;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Tournament> index()
    {
        return tournament.findAll();
    }

}
